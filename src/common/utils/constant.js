module.exports = {
  DEFAULT_PAGE: 1,
  DEFAULT_PER_PAGE: 5,
  JWT_TOKEN_EXPIRED: '12h',
  JWT_REFRESH_TOKEN_EXPIRED: '7d',
  OTP_KEY_PREFIX: 'otp:',
  MAX_SIZE: 10 * 1024 * 1024,
  SUCCESS_MESSAGE: {
    USER_CREATED: 'User created',
    USER_LOGGED_IN: 'User logged in',
    TOKEN_REFRESHED: 'Token refreshed',
    USER_LOGGED_OUT: 'User logged out',
    OTP_VERIFIED: 'OTP verified',
    CURRENT_USER_RETRIEVED: 'Current user profile retrieved successfully',
    PROFILE_ADDED: 'Profile created successfully',
    PROFILE_UPDATED: 'Profile updated successfully',
    AVATAR_ADDED: 'Avatar added successfully',
    AVATAR_UPDATED: 'Avatar updated successfully',
    ROLE_ADDED: 'Role added successfully',
    ROLE_UPDATED: 'Role updated successfully',
    ROLE_RETRIEVED: 'Role retrieved successfully'
  },

  ERROR_MESSAGE: {
    USER_NOT_FOUND: 'User tidak ditemukan',
    INVALID_TOKEN: 'Invalid token',
    INVALID_CREDENTIALS: 'Username atau password salah',
    INVALID_REFRESH_TOKEN: 'Invalid refresh token',
    EMAIL_ALREADY_EXIST: 'Email sudah terdaftar',
    USERNAME_ALREADY_EXIST: 'Username sudah terdaftar',
    PASSWORD_NOT_MATCH: 'Password tidak sama',
    USER_NOT_VERIFIED: 'User belum terverifikasi',
    INVALID_OTP: 'OTP tidak valid',
    PROFILE_ALREADY_EXIST: 'Profile sudah ada',
    ROLE_ALREADY_EXISTS: 'Role sudah ada',
    ROLE_NOT_FOUND: 'Role tidak ditemukan',
    USER_ROLE_EXISTS: 'User role sudah ada'
  }
}
