import { $fetch } from 'ofetch'

export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  // Create a custom fetch instance with base URL
  const api = $fetch.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Accept': 'application/json',
    },
    onRequest({ request, options }) {
      // Add any global request interceptors here
      // console.log('API Request:', request)
      // console.log('API Request:', request)
    },
    onResponse({ response }) {
      // Add any global response interceptors here
      // console.log('API Response:', response.status)
      // console.log('API Response:', response.status)
    },
    onResponseError({ response }) {
      // Handle global errors
      console.error('API Error:', response.status, response._data)
    },
  })

  // Blog related API methods
  const getBlogs = async (params?: any) => {
    return await api('/blogs', { method: 'GET', query: params })
  }

  const getBlogById = async (id: string) => {
    return await api(`/blogs/${id}`, { method: 'GET' })
  }

  const createBlog = async (data: any) => {
    return await api('/blogs', { method: 'POST', body: data })
  }

  const updateBlog = async (id: string, data: any) => {
    return await api(`/blogs/${id}`, { method: 'PUT', body: data })
  }

  const deleteBlog = async (id: string) => {
    return await api(`/blogs/${id}`, { method: 'DELETE' })
  }

  // Contact form API methods
  const submitContact = async (data: any) => {
    return await api('/contact', { method: 'POST', body: data })
  }

  // Features API methods
  const getFeatures = async (params?: any) => {
    return await api('/features', { method: 'GET', query: params })
  }

  // Testimonials API methods
  const getTestimonials = async (params?: any) => {
    return await api('/testimonials', { method: 'GET', query: params })
  }

  // Case studies API methods
  const getCaseStudies = async (params?: any) => {
    return await api('/case-studies', { method: 'GET', query: params })
  }

  const getCaseStudyById = async (id: string) => {
    return await api(`/case-studies/${id}`, { method: 'GET' })
  }

  // User authentication (if needed)
  const login = async (credentials: { email: string; password: string }) => {
    return await api('/auth/login', { method: 'POST', body: credentials })
  }

  const register = async (userData: any) => {
    return await api('/auth/register', { method: 'POST', body: userData })
  }

  // Pages
  const getPages = async (params?: { include_pages?: boolean; active?: boolean }) => {
    const result = await api('/api/v1/pages', { method: 'GET', query: params })
    console.log('Fetched all pages:', result)
    return result
  }

  const getPagesBySlug = async (slug: string) => {
    return await api(`/api/v1/pages/${slug}`, { method: 'GET' })
  }

  // Forms API methods
  const getForms = async (params?: { include_submissions?: boolean; active?: boolean }) => {
    const result = await api('/api/v1/forms', { method: 'GET', query: params })
    // console.log('Fetched all forms:', result)
    return result
  }

  const getFormBySlug = async (identifier: string) => {
    const result = await api(`/api/v1/forms/${identifier}`, { method: 'GET' })
    // console.log(`Fetched form by identifier ${identifier}:`, result)
    return result
  }


  
const submitForm = async (identifier: string, data: any) => {
    const { captcha, ...formData } = data

    try {
      const result = await api(`/api/v1/pages/${identifier}/submit`, {
        method: 'POST',
        body: {
          ...formData,
          captcha,
        }
      })
      return result
    } catch (err: any) {
      if (err?.response?._data?.message) {
        console.error('API submitForm error:', err.response._data.message)
        throw new Error(err.response._data.message)
      } else {
        console.error('API submitForm unknown error:', err)
        throw err
      }
    }
  }



  // Policies API methods
  const getPolicies = async (params?: any) => {
    return await api('/api/v1/policies', { method: 'GET', query: params })
  }

  const getPolicyBySlug = async (slug: string) => {
    return await api(`/api/v1/policies/${slug}`, { method: 'GET' })
  }

  const getPageBySlug = async (slug: string) => {
    return await api(`/api/v1/pages/${slug}`, { method: 'GET' })
  }
  const getAboutUsPage = async () => {
    return await api('/api/v1/pages/about-us', { method: 'GET' })
  }

  const getFeaturesPage = async () => {
    return await api('/api/v1/pages/features', { method: 'GET' })
  }

  // Generic API method for custom endpoints
  const customRequest = async (endpoint: string, options: any = {}) => {
    return await api(endpoint, options)
  }

  return {
    // Blog methods
    getBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
    // Contact methods
    submitContact,
    // Features methods
    getFeatures,
    // Testimonials methods
    getTestimonials,
    // Case studies methods
    getCaseStudies,
    getCaseStudyById,

    // Pages
    getPages,
    getPagesBySlug,
    getPageBySlug,
    getAboutUsPage,
    getFeaturesPage,

    // Forms methods
    getForms,
    getFormBySlug,
    submitForm,

    // Policies methods
    getPolicies,
    getPolicyBySlug,

    // Auth methods
    login,
    register,
    // Generic method
    customRequest,
  }
}
