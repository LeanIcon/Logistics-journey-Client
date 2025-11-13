# TODO: Fix Form Submission API Data Structure

## Tasks
- [x] Update Request_demo.vue to pass formData.value directly to submitForm instead of wrapping in { fields: formData.value }
- [x] Update useApi.ts submitForm function parameter type to accept any instead of { fields: any; captcha?: string }
- [x] Test the form submission to ensure validation errors are resolved
- [x] Add success popup to display API response message after form submission

# TODO: Implement Policies API Integration

## Tasks
- [x] Install @nuxtjs/markdownit for markdown rendering
- [x] Add markdownit module to nuxt.config.ts
- [x] Add getPolicies and getPolicyBySlug methods to useApi.ts
- [x] Update Policy/content.vue to fetch policy content from API with fallback to static content
- [x] Update Policy/hero.vue to display dynamic title and date (currently static)
- [x] Test the policy page to ensure API integration works and fallback is maintained
