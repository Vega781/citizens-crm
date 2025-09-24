export const BASE_PATH = '/citizens-crm'

export const ROUTES = {
    DASHBOARD: `${BASE_PATH}/dashboard`,
    CITIZENS: `${BASE_PATH}/citizens`,
    CITIZEN: `${BASE_PATH}/citizen/:id`,
    ROOT: '/',
}

export const getRoutes = {
    citizen: (id) => `${BASE_PATH}/citizen/${id}`,
}

export const REDIRECT_PATH = ROUTES.CITIZENS