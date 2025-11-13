# TODO: Fix Form Submission API Data Structure

## Tasks
- [x] Update Request_demo.vue to pass formData.value directly to submitForm instead of wrapping in { fields: formData.value }
- [x] Update useApi.ts submitForm function parameter type to accept any instead of { fields: any; captcha?: string }
- [x] Test the form submission to ensure validation errors are resolved
- [x] Add success popup to display API response message after form submission
