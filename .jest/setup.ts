import "@testing-library/jest-dom"
import "jest-styled-components"
import 'whatwg-fetch'

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: ""
        }
    }
}))
