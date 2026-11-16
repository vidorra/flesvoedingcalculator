'use client'

import { useMemo, useState } from 'react'
import { Download, CalendarPlus } from 'lucide-react'
import { feedingRow, nl, scoopsLabel, scheduleTimes } from '../../lib/feeding-table'

const VOEDINGEN = [4, 5, 6, 7, 8, 9, 10]

/** .ics met één dagelijks terugkerende afspraak per voedingstijd. */
function maakIcs(times: readonly string[], perFeed: number): string {
  const nu = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  const datum = `${nu.getFullYear()}${pad(nu.getMonth() + 1)}${pad(nu.getDate())}`
  const stamp = nu.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const events = times.map((t, i) => {
    const [h, m] = t.split(':').map(Number)
    const eind = new Date(2000, 0, 1, h, m + 30)
    return [
      'BEGIN:VEVENT',
      `UID:voeding-${datum}-${i}@flesvoedingcalculator.nl`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${datum}T${pad(h)}${pad(m)}00`,
      `DTEND:${datum}T${pad(eind.getHours())}${pad(eind.getMinutes())}00`,
      'RRULE:FREQ=DAILY',
      `SUMMARY:Flesvoeding ${perFeed} ml`,
      'DESCRIPTION:Voorbeeldtijd. Geef de fles op verzoek\\, de tijden schuiven mee met je baby. FlesvoedingCalculator.nl',
      'END:VEVENT'
    ].join('\r\n')
  })
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//FlesvoedingCalculator.nl//Voedingsschema//NL', ...events, 'END:VCALENDAR'].join('\r\n')
}

export default function SchemaMaker() {
  const [gewicht, setGewicht] = useState('')
  const [voedingen, setVoedingen] = useState(7)
  const [halfjaar, setHalfjaar] = useState(false)

  const kg = parseFloat(gewicht.replace(',', '.'))
  const geldig = Number.isFinite(kg) && kg >= 1.5 && kg <= 15

  const rij = useMemo(
    () => (geldig ? feedingRow(kg, voedingen, halfjaar ? 6 : 0) : null),
    [geldig, kg, voedingen, halfjaar]
  )
  const tijden = scheduleTimes(voedingen)

  const downloadPdf = async () => {
    if (!rij) return
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    const primary: [number, number, number] = [16, 148, 174]
    const dark: [number, number, number] = [55, 65, 81]
    const pageWidth = doc.internal.pageSize.width
    const margin = 20
    const contentWidth = pageWidth - margin * 2

    doc.setFillColor(...primary)
    doc.rect(0, 0, pageWidth, 40, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    doc.text('FLESVOEDING SCHEMA', pageWidth / 2, 17, { align: 'center' })
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.text('FlesvoedingCalculator.nl', pageWidth / 2, 30, { align: 'center' })

    let y = 55
    doc.setFillColor(248, 250, 252)
    doc.rect(margin, y - 5, contentWidth, 30, 'F')
    doc.setTextColor(...dark)
    doc.setFontSize(12)
    const info: [string, string][] = [
      ['Gewicht:', `${nl(kg)} kg`],
      ['Per dag:', `${rij.daily} ml`],
      ['Per voeding:', `${rij.perFeed} ml (${scoopsLabel(rij.scoops)} schepjes), ${voedingen} voedingen`]
    ]
    info.forEach(([label, waarde], i) => {
      doc.setFont('helvetica', 'bold')
      doc.text(label, margin + 5, y + 5 + i * 10)
      doc.setFont('helvetica', 'normal')
      doc.text(waarde, margin + 45, y + 5 + i * 10)
    })

    y += 45
    doc.setTextColor(...primary)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.text('Voorbeeldtijden', margin, y)
    y += 8
    tijden.forEach((t, i) => {
      if (i % 2 === 0) {
        doc.setFillColor(248, 250, 252)
        doc.rect(margin, y - 3, contentWidth, 10, 'F')
      }
      doc.setTextColor(...dark)
      doc.setFontSize(11)
      doc.setFont('helvetica', 'normal')
      doc.text(t, margin + 5, y + 3)
      doc.setFont('helvetica', 'bold')
      doc.text(`${rij.perFeed} ml`, margin + 40, y + 3)
      y += 10
    })

    y += 8
    doc.setTextColor(...dark)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    const noot = doc.splitTextToSize(
      'Dit is een richtlijn (ongeveer 150 ml per kilo per dag, Voedingscentrum). Geef de fles op verzoek: de tijden schuiven mee met je baby en het flesje hoeft niet leeg. Twijfel je over drinken of groei, bel dan de huisarts of het consultatiebureau.',
      contentWidth
    )
    doc.text(noot, margin, y)

    const footerY = doc.internal.pageSize.height - 20
    doc.setFillColor(...primary)
    doc.rect(0, footerY - 5, pageWidth, 25, 'F')
    doc.setTextColor(255, 255, 255)
    doc.text('FlesvoedingCalculator.nl', pageWidth / 2, footerY + 5, { align: 'center' })
    doc.text(`Gemaakt op ${new Date().toLocaleDateString('nl-NL')}`, pageWidth / 2, footerY + 12, { align: 'center' })

    doc.save(`voedingsschema-${voedingen}-voedingen.pdf`)
  }

  const downloadIcs = () => {
    if (!rij) return
    const blob = new Blob([maakIcs(tijden, rij.perFeed)], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'voedingsschema.ics'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label className="block">
          <span className="block text-sm text-gray-600 mb-1">Gewicht (kg)</span>
          <input
            type="text"
            inputMode="decimal"
            placeholder="bijv. 4,5"
            value={gewicht}
            onChange={(e) => setGewicht(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-primary focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="block text-sm text-gray-600 mb-1">Voedingen per dag</span>
          <select
            value={voedingen}
            onChange={(e) => setVoedingen(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-primary focus:outline-none"
          >
            {VOEDINGEN.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-sm text-gray-600 mb-1">Leeftijd</span>
          <select
            value={halfjaar ? '6' : '0'}
            onChange={(e) => setHalfjaar(e.target.value === '6')}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-primary focus:outline-none"
          >
            <option value="0">Jonger dan 6 maanden</option>
            <option value="6">6 maanden of ouder</option>
          </select>
        </label>
      </div>

      {!rij && (
        <p className="text-sm text-gray-500 mt-4">Vul een gewicht in tussen 1,5 en 15 kg om je schema te zien.</p>
      )}

      {rij && (
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-700">
            <span className="font-semibold">{rij.daily} ml per dag</span>, {voedingen} voedingen van{' '}
            <span className="font-semibold">{rij.perFeed} ml</span> ({scoopsLabel(rij.scoops)} schepjes).
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Tijd</th>
                  <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Hoeveelheid</th>
                </tr>
              </thead>
              <tbody>
                {tijden.map((t, i) => (
                  <tr key={t} className={i % 2 === 1 ? 'bg-white' : undefined}>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">{t}</td>
                    <td className="border border-gray-300 px-4 py-2">{rij.perFeed} ml</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Voorbeeldtijden. Je geeft de fles op verzoek, dus de tijden schuiven mee met je baby.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              type="button"
              onClick={downloadPdf}
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 font-medium text-white hover:opacity-90 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
            <button
              type="button"
              onClick={downloadIcs}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              <CalendarPlus className="w-4 h-4 mr-2" />
              Zet in agenda
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
