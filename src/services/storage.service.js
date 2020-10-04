const TOKEN_KEY = 'REACTAPP.TOKEN';
const USER = 'REACTAPP.USER';
const REFRESH_TOKEN_KEY = 'REACTAPP.REFRESH_TOKEN';

// 스토리지에서 액세스 토큰을 저장하고 검색하는 방법을 관리.
// 현재 구현은 localStorage에 저장됩니다.
// 로컬 저장소는 항상 이 예를 통해 액세스합니다.

const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    }
}

const SetUser = {
    getUser() {
        let user = localStorage.getItem(USER);
        return JSON.parse(user)
    },

    isAdmin() {
        let user = this.getUser();
        return user != null ? user.role == 'admin' : false
    },

    saveUser(user) {
        localStorage.setItem(USER, JSON.stringify(user));
    },

    removeUser() {
        localStorage.removeItem(USER)
    }
}

export {TokenService, SetUser}