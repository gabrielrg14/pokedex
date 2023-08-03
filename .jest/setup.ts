import "@testing-library/jest-dom"
import "jest-styled-components"

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
