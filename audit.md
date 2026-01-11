# FlesvoedingCalculator.nl - Full Project Audit

**Audit Date:** January 11, 2026
**Auditor:** Claude Code
**Project Version:** 1.0.2

---

## Executive Summary

The FlesvoedingCalculator.nl project is a well-structured Next.js application that provides baby feeding calculations based on Dutch (Nederlandse) guidelines. The codebase demonstrates good practices in many areas but has some security considerations and minor calculation concerns that should be addressed.

**Overall Score: 7.5/10**

---

## 1. Calculation Logic Audit

### 1.1 Main Feeding Calculator (`app/page.jsx`)

#### Formula Used
- **Base formula:** 150ml per kg body weight per day (Dutch standard - Voedingscentrum)
- **Age adjustments:**
  - 0-2 weeks: 150ml/kg (with gradual introduction notes: start 10-15ml/voeding, increase 10ml/day)
  - 2-4 weeks: 150ml/kg (baby can usually handle full guideline)
  - 1-3 months: 150ml/kg
  - 3-6 months: 150ml/kg
  - 6+ months: 100ml/kg (solid food introduction)

#### Premature Baby Calculations
- Corrected age calculation: `chronological age - (40 weeks - gestational weeks)`
- Increased ml/kg for premature babies:
  - Very premature (<32 weeks): 170ml/kg
  - Moderately premature (32-34 weeks): 160ml/kg
  - Late premature (34+ weeks): 155ml/kg
  - Before term (negative corrected age): 180ml/kg

#### Verification Status

| Calculation | Status | Notes |
|------------|--------|-------|
| 150ml/kg base formula | CORRECT | Matches Dutch Voedingscentrum guidelines |
| Age-based adjustments | CORRECTED | Now uses 150ml/kg for all ages (was incorrectly reduced for newborns) |
| Premature calculations | CORRECT | Based on ESPGHAN 2022 guidelines |
| Schepjes (scoops) calculation | CORRECT | 30ml water = 1 scoop (EU standard) |
| Rounding to 5ml | CORRECT | Practical for parents |
| Max daily cap (1000ml/1200ml premature) | CORRECT | Prevents overfeeding |

#### Minor Concerns
1. **Line 633:** Warning for `ageMonths === '0'` but the dropdown doesn't have this value (uses '0-2weeks' and '2-4weeks' instead). This warning may never display.

### 1.2 Schepjes Calculator (`app/schepjes-calculator/page.jsx`)

- Uses correct 30ml per scoop standard
- Properly handles non-exact amounts with alternatives
- EU regulation 2016/127 reference is accurate

### 1.3 Voedingsschemas (`app/voedingsschemas/page.jsx`)

- Static feeding schedules are reasonable for each age group
- Amounts align with main calculator formulas
- PDF generation works correctly

---

## 2. Code Quality Audit

### 2.1 Architecture

| Aspect | Score | Notes |
|--------|-------|-------|
| Project structure | 8/10 | Clean Next.js App Router structure |
| Component organization | 7/10 | Good separation, some large page components |
| Code reusability | 6/10 | Some repeated patterns could be extracted |
| TypeScript adoption | 3/10 | Project uses JSX, no type safety |

### 2.2 Identified Issues

#### High Priority
1. **Large page component** (`app/page.jsx` - 1217 lines)
   - Should be split into smaller components
   - Calculator logic should be extracted to a custom hook

2. **No TypeScript**
   - Type safety would prevent runtime errors
   - Especially important for medical/calculation applications

#### Medium Priority
3. **Hardcoded values**
   - Feeding formulas are embedded in components
   - Should be extracted to a configuration file

4. **Duplicate code**
   - Feeding schedule generation repeated in multiple places
   - Tooltip components could be reusable

#### Low Priority
5. **Console logs in production**
   - Several `console.log` statements in API routes
   - Should use proper logging library

### 2.3 Dependencies Review

```json
{
  "next": "^14.0.0",           // Current, good
  "react": "^18.2.0",           // Current, good
  "drizzle-orm": "^0.44.5",     // Recent, good
  "lucide-react": "^0.309.0",   // Good icon library
  "jspdf": "^3.0.3",            // PDF generation
  "jsonwebtoken": "^9.0.2"      // JWT - check if actually used
}
```

**Observation:** `jsonwebtoken` is listed but not seen in use. Consider removing if unused.

---

## 3. Security Audit

### 3.1 Authentication

| Component | Status | Risk Level |
|-----------|--------|------------|
| Admin password authentication | WEAK | MEDIUM |
| Session storage for auth | WEAK | MEDIUM |
| No JWT tokens | - | LOW |
| No rate limiting on admin login | CONCERN | MEDIUM |

#### Issues Found

1. **Plain text password comparison** (`app/api/admin-auth/route.js:22`)
   ```javascript
   if (password === adminPassword)
   ```
   - Should use bcrypt for hashing
   - Comment acknowledges this: "in production, consider using bcrypt"

2. **Session storage authentication** (`components/AdminAuth.jsx:14`)
   ```javascript
   sessionStorage.setItem('admin-auth', 'authenticated')
   ```
   - Simple string check, easily bypassable
   - No server-side session validation
   - Recommend: JWT tokens with server validation

3. **No CSRF protection**
   - API routes don't validate CSRF tokens
   - Next.js 14 has some built-in protection, but explicit is better

### 3.2 Input Validation

| Area | Status | Notes |
|------|--------|-------|
| Contact form | GOOD | Proper validation and sanitization |
| Calculator inputs | ADEQUATE | Basic validation |
| Admin APIs | GOOD | Input checking present |

#### Positive Findings

1. **Contact form** (`app/api/contact/route.js`)
   - reCAPTCHA v3 integration
   - Rate limiting (5 requests per 15 minutes)
   - Input sanitization (XSS prevention)
   - Spam pattern detection
   - Email validation

### 3.3 Data Exposure

| Risk | Status |
|------|--------|
| API key exposure | LOW - keys in env vars |
| Database credentials | LOW - properly managed |
| User data leakage | LOW - minimal user data |

### 3.4 Recommendations

1. **Implement proper authentication:**
   ```javascript
   // Use bcrypt for password hashing
   import bcrypt from 'bcrypt'
   const isValid = await bcrypt.compare(password, hashedPassword)
   ```

2. **Add JWT tokens:**
   ```javascript
   // Generate token after successful login
   const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: '1h' })
   ```

3. **Server-side session validation:**
   - Validate tokens on each admin API request
   - Add middleware for protected routes

---

## 4. SEO & Accessibility Audit

### 4.1 SEO Implementation

| Feature | Status | Score |
|---------|--------|-------|
| Meta tags | Excellent | 9/10 |
| Open Graph | Excellent | 9/10 |
| Twitter cards | Excellent | 9/10 |
| Structured data | Excellent | 9/10 |
| Canonical URLs | Good | 8/10 |
| Sitemap | Present | 8/10 |

#### Structured Data Types Used
- WebSite schema
- Organization schema
- SoftwareApplication schema
- FAQPage schema
- HowTo schema
- BreadcrumbList schema
- MedicalWebPage schema

### 4.2 Accessibility

| Area | Status | Notes |
|------|--------|-------|
| Semantic HTML | GOOD | Proper heading hierarchy |
| Form labels | GOOD | Labels present |
| Color contrast | UNCERTAIN | Primary teal needs verification |
| Keyboard navigation | ADEQUATE | Needs testing |
| Screen reader support | ADEQUATE | Basic ARIA present |
| Alt text on images | GOOD | Present on all images |

### 4.3 Performance

| Feature | Status |
|---------|--------|
| Next.js Image optimization | Used |
| Web Vitals monitoring | Implemented |
| Google Analytics | Implemented |
| Microsoft Clarity | Implemented |
| Preconnect hints | Present |

---

## 5. Database Schema Review

### 5.1 Tables

```sql
-- snippets: Affiliate product data
-- page_snippets: Page-snippet relationships
-- pages: Page metadata for multi-site support
```

### 5.2 Observations

- Clean relational design
- Proper foreign key relationships
- Soft delete via `active` flag
- Multi-site support built-in (flesvoedingcalculator, togwaarde)

---

## 6. File Structure Analysis

```
flesvoedingcalculator/
├── app/                    # Next.js 14 App Router
│   ├── api/               # 14 API routes
│   ├── kennisbank/        # 50+ knowledge base articles
│   └── [pages]            # Various page routes
├── components/            # 15 React components
├── lib/                   # Utilities and database
│   └── db/               # Drizzle ORM schema
├── public/               # Static assets
└── scripts/              # Migration scripts
```

**Total files:** ~136 JS/JSX files
**Main page component:** 1,217 lines (consider splitting)

---

## 7. Action Items

### Critical (Fix Immediately)
- [ ] None identified

### High Priority
- [ ] Implement bcrypt password hashing for admin
- [ ] Add proper JWT session management
- [ ] Fix newborn warning condition (line 633)

### Medium Priority
- [ ] Split main page.jsx into smaller components
- [ ] Extract calculation logic to custom hooks
- [ ] Add TypeScript for type safety
- [ ] Remove unused jsonwebtoken dependency
- [ ] Replace console.log with proper logging

### Low Priority
- [ ] Create configuration file for feeding formulas
- [ ] Add unit tests for calculations
- [ ] Verify WCAG color contrast compliance
- [ ] Add keyboard navigation testing

---

## 8. Conclusion

FlesvoedingCalculator.nl is a well-built application with **accurate calculations** based on official Dutch and European guidelines. The main feeding formula (150ml/kg) and age adjustments are medically sound.

**Strengths:**
- Accurate feeding calculations
- Good SEO implementation
- Proper input validation on contact forms
- Clean database design
- Comprehensive knowledge base

**Areas for Improvement:**
- Admin authentication security
- Code organization (split large components)
- TypeScript adoption
- Unit test coverage

The calculations can be trusted for their intended purpose as a general guideline tool, with appropriate medical disclaimers in place.

---

*This audit was generated by Claude Code on January 11, 2026*
