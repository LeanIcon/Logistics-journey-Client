# Google Tag Manager Setup Guide

## Overview
This project now includes both **Google Analytics 4 (GA4)** and **Google Tag Manager (GTM)** support.

### Current Setup

#### Google Analytics 4 (ga.client.ts)
- **Measurement ID:** `G-ST3S57LEHB`
- **Status:** Active, tracking page views automatically
- **Events:** Sends explicit page_view events on route changes

#### Google Tag Manager (gtm.client.ts) - NOT YET CONFIGURED
- **Container ID:** `GTM-XXXXXXX` (replace with your actual GTM Container ID)
- **Status:** Template ready, needs your GTM ID

---

## How to Set Up GTM

### Step 1: Create a GTM Account & Container
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Sign in with your Google account
3. Click **Create Account**
   - Account name: `Logistics Journey`
   - Container name: `logistics-journey-website`
   - Choose **Web** as the target platform
4. Accept the terms and create
5. **Copy your Container ID** (format: `GTM-XXXXXX`)

### Step 2: Add GTM Container ID to Your Project

#### Option A: Environment Variable (Recommended)
1. Open `.env` or your deployment platform's environment settings
2. Add:
   ```
   NUXT_PUBLIC_GTM_ID=GTM-XXXXXX
   ```
3. Update `plugins/gtm.client.ts` to use runtime config:
   ```typescript
   const config = useRuntimeConfig();
   const gtmId = config.public.gtmId || "GTM-XXXXXXX";
   ```

#### Option B: Direct in Code (Quick Test)
1. Open `plugins/gtm.client.ts`
2. Replace `GTM-XXXXXXX` with your actual GTM Container ID
3. Deploy

### Step 3: Verify GTM is Working
1. Deploy your changes
2. Visit `https://new.logisticjourney.com/`
3. Open DevTools → Console
4. Check for the log message: `"GTM initialized with container ID: GTM-XXXXXX"`
5. Go back to Google Tag Manager → Preview & Debug mode (right side)
   - You should see your domain and real-time data flowing in

### Step 4: Create GA4 Configuration Tag in GTM
Once GTM is connected:

1. In GTM, click **Tags** → **New**
2. Choose **Google Analytics: GA4 Configuration**
3. Set Measurement ID to `G-ST3S57LEHB`
4. Trigger: **Initialization - All Pages**
5. Publish

---

## What's Included

### GA4 (Direct)
- ✅ Automatic page view tracking
- ✅ Route change tracking (SPA)
- ✅ Anonymized IP
- ✅ Event tracking ready

### GTM (When Configured)
- Track custom events from GTM dashboard
- Manage tags without redeploying code
- Test tags before publishing (Preview mode)
- Better tag governance and versioning

---

## Testing

### Console Logs
After deploying, check your browser console:
```
GA (G-ST3S57LEHB) initialized with explicit page_view event
GA page_view tracked: /
GTM initialized with container ID: GTM-XXXXXX
```

### GTM Preview Mode
1. In GTM, click **Preview** (top-right)
2. Enter your website URL: `https://new.logisticjourney.com/`
3. A debug panel appears at bottom showing real-time tag firing
4. Navigate your site and watch events flow

### GA4 Real-time Report
1. Open Google Analytics → Real-time
2. Visit your site in a new tab
3. Real-time should show active users within 1-2 seconds

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| GTM console log not showing | Check Container ID is correct, redeploy, clear cache |
| Real-time shows no users | Check GA4 property has correct Measurement ID, wait 24h for initial data |
| Tags firing in GTM Preview but not production | Publish the GTM container (blue "Submit" button top-right) |
| CSP blocking Google scripts | Add `https://www.googletagmanager.com` to your Content Security Policy |

---

## Next Steps

1. **Get your GTM Container ID** from Google Tag Manager
2. **Update** `plugins/gtm.client.ts` or set env var `NUXT_PUBLIC_GTM_ID`
3. **Deploy** the changes
4. **Verify** with GTM Preview & GA4 Real-time
5. **(Optional)** Create custom events and tags in GTM dashboard

For more info, see [Google Tag Manager Documentation](https://support.google.com/tagmanager).
