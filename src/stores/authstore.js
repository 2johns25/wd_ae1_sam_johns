export default {
    state: {
        user: ""
    },
    setAuthAction(user) {
        if (!user) return false
        this.state.user = user;
    },
    clearAuthFunction() {
        this.state.user = "";
    }
}