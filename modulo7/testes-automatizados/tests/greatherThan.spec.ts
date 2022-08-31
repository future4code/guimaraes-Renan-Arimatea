import { performPurchase, User } from "../src"

describe("greather than", ()=> {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Renan",
            balance: 20
        }

        const result = performPurchase(user, 30)

        expect(result).not.toBeDefined()
    })
}) 
