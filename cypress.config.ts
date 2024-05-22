import { defineConfig } from "cypress"

export default defineConfig({
    projectId: "w6cer1",
    e2e: {
        baseUrl: "http://localhost:3000",
        video: true
    }
})
