// // app/providers.js
// 'use client'
// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'
// console.log(process.env.NEXT_PUBLIC_POSTHOG_KEY)
// if (typeof window !== 'undefined') {
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
//     api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
//     person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
//   })
// }
// export function CSPostHogProvider({ children }) {
//     return <PostHogProvider client={posthog}>{children}</PostHogProvider>
// }