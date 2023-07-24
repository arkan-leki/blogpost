const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        // mongodbURL: 'mongodb+srv://arkan_laki:arkan1234@cluster0.7vxzzgx.mongodb.net/next-course?retryWrites=true&w=majority',
        mongodb_username: 'arkan_laki',
        mongodb_password: 'arkan1234',
        mongodb_cluster: 'cluster0.7vxzzgx.mongodb.net',
        mongodb_database: 'next-course-dev',
      }
    }
  };

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'arkan_laki',
      mongodb_password: 'arkan1234',
      mongodb_cluster: 'cluster0.7vxzzgx.mongodb.net',
      mongodb_database: 'next-course',
    }
  };

}