# Al-Madar Foundation Website

A responsive, multi-page Next.js website starter for Al-Madar Foundation, with Supabase-powered donation submissions, volunteer applications, contact messages and a private admin dashboard.

## Included pages

- Home
- About
- Our Work (Food, Education, Health)
- Team
- Impact & Transparency
- Get Involved
- Donate
- Contact
- Admin sign-in and dashboard

## Important content choices

- Al-Madar is described as established in 2026.
- The website does **not** claim Al-Madar has already completed projects or delivered beneficiary totals.
- Hasham Sultan's 600+ hours are described as his personal community-service experience across different organisations, not as Al-Madar impact.
- The 500+ milestone has been omitted.
- The NayaPay account is labelled as a personal account in Hasham Sultan's name, not an institutional foundation account.
- Founder portraits are placeholders until real photos are supplied.
- The literal meaning of “Al-Madar” has not been asserted because it was not confirmed.

## Run locally

1. Install Node.js 20 LTS or newer.
2. Extract this folder.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```

4. Visit http://localhost:3000

The public website pages render without Supabase, but interactive forms and admin sign-in require the backend configuration below.

## Connect the backend (Supabase)

1. Create a project at https://supabase.com.
2. In Project Settings → API, copy the Project URL and anon/public key.
3. Put them in `.env.local`:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
   ```

4. Open Supabase SQL Editor and run `supabase/schema.sql`.
5. In Supabase Authentication settings:
   - Disable public sign-ups.
   - Create one administrator user for Hasham using an email address and a strong password.
   - Do not create accounts for public visitors.
6. Restart the development server.

### Donation receipt privacy

Donation receipts are stored in a private Supabase Storage bucket. The SQL creates a private bucket and does not make receipts publicly readable. The admin dashboard currently lists donation records and supports manual verification/rejection. A production enhancement should add a secure signed-URL action for the admin to inspect uploaded receipts, plus rate limiting, malware scanning and audit logging before accepting real donations at scale.

### Admin dashboard

Visit `/admin` and sign in with the administrator credentials created in Supabase. It displays:
- Donation submissions and pending/verified/rejected status
- Volunteer applications
- Contact messages

The starter SQL policies assume the only authenticated user is the administrator. Keep public sign-up disabled and maintain only Hasham's admin account.

## Deploy free (initially) with Vercel

1. Create a GitHub account/repository and upload this project.
2. Import the repository at https://vercel.com.
3. Add the two Supabase environment variables in Vercel Project Settings → Environment Variables.
4. Deploy.
5. Vercel will provide a temporary `*.vercel.app` URL.
6. When the domain is ready, add it in Vercel → Settings → Domains and follow the DNS instructions from your domain registrar.
7. In Supabase Authentication → URL Configuration, set the deployed website URL as the Site URL and add it to allowed redirect URLs if you later add email sign-in links.

Free tiers can change and have usage limits. Check current provider limits before relying on them for ongoing operations.

## Before publishing publicly

- Confirm that Al-Madar has permission to publish the personal NayaPay account details.
- Confirm the account is appropriate for receiving public donations and consider opening an organisation-controlled account as the foundation formalises.
- Add founder photographs with each person's consent.
- Confirm founder/co-founder biographies and approve the drafted founder message.
- Add official social links and the final domain.
- Confirm the details of environmental initiatives before publishing them as completed activities.
- Confirm food-rescue safety procedures: only safe, suitable food should be accepted and distributed; never redistribute expired or unsafe food.
- For blood donation activities, partner with a licensed hospital/blood bank. Al-Madar should coordinate voluntary donors rather than collect, test, store or transfuse blood itself.
- Add a privacy policy that reflects actual data handling and applicable Pakistani law.
- Set up backups, spam protection, rate limiting and an email notification provider.
- Test the donation form and admin verification workflow with test data before inviting public submissions.

## Design

Palette:
- Forest green `#355E3B`
- Deep green `#203D29`
- Antique gold `#C5A572`
- Warm beige `#E8DCCF`
- Warm off-white `#F8F7F3`

Typography: Playfair Display + DM Sans.

## Current limitations

This is a deployable starter project, not a live hosted website. It does not yet include a full content-management editor, public gallery/blog publishing tools, automated email notifications, downloadable annual reports, social media integrations, or an admin receipt-preview/signed-link control. Those can be added as the next development phase.
