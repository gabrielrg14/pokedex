import "@testing-library/jest-dom"
import "jest-styled-components"
import "../src/test/server/setup-env"

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
