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
    },
    onRequest({ request, options }) {
      // Add any global request interceptors here
      // console.log('API Request:', request)
    },
    onResponse({ response }) {
      // Add any global response interceptors here
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
    const result = await api(`/api/v1/pages/${identifier}/submit`, { method: 'POST', body: data })
    // console.log(`Submitted form for ${identifier}:`, result)
    return result
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
    // Forms methods
    getForms,
    getFormBySlug,
    submitForm,
    // Auth methods
    login,
    register,
    // Generic method
    customRequest,
  }
}
