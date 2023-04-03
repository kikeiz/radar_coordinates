
export class TestInputs {

    //API TESTS
    public static apiTests = [
        {
            bodyRequest: { "protocols": ["avoid-mech"], "scan": [{ "coordinates": { "x": 0, "y": 40 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 80 }, "allies": 5, "enemies": { "type": "mech", "number": 1 } }] },
            response: { "x": 0, "y": 40 }
        },
        {
            bodyRequest: { "protocols": ["prioritize-mech"], "scan": [{ "coordinates": { "x": 0, "y": 40 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 80 }, "allies": 5, "enemies": { "type": "mech", "number": 1 } }] },
            response: { "x": 0, "y": 80 }
        },
        {
            bodyRequest: { "protocols": ["closest-enemies"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "soldier" }, "coordinates": { "y": 30, "x": 10 } }] },
            response: { "x": 10, "y": 30 }
        },
        {
            bodyRequest: { "protocols": ["furthest-enemies"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "soldier" }, "coordinates": { "y": 30, "x": 10 } }] },
            response: { "x": 5, "y": 35 }
        },
        {
            bodyRequest: { "protocols": ["assist-allies"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "allies": 3, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "soldier" }, "coordinates": { "y": 5, "x": 35 } }] },
            response: { "x": 5, "y": 35 }
        },
        {
            bodyRequest: { "protocols": ["avoid-crossfire"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "allies": 3, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "soldier" }, "coordinates": { "y": 5, "x": 35 } }] },
            response: { "x": 35, "y": 5 }
        },
        {
            bodyRequest: { "protocols": ["furthest-enemies"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "soldier" }, "coordinates": { "y": 30, "x": 10 } }] },
            response: { "x": 5, "y": 35 }
        },
        {
            bodyRequest: { "protocols": ["closest-enemies", "avoid-mech"], "scan": [{ "coordinates": { "x": 0, "y": 1 }, "enemies": { "type": "mech", "number": 1 } }, { "coordinates": { "x": 0, "y": 10 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 99 }, "enemies": { "type": "mech", "number": 1 } }] },
            response: { "x": 0, "y": 10 }
        },
        {
            bodyRequest: { "protocols": ["closest-enemies"], "scan": [{ "coordinates": { "x": 89, "y": 13 }, "enemies": { "type": "mech", "number": 1 } }, { "coordinates": { "x": 11, "y": 35 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 19, "y": 49 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 38, "y": 21 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 10, "y": 39 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 13, "y": 38 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 13, "y": 15 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 30, "y": 19 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 15, "y": 19 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 22, "y": 15 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 10, "y": 19 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 94, "y": 11 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 10, "y": 19 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 90, "y": 18 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 80, "y": 51 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 70, "y": 91 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 30, "y": 95 }, "enemies": { "type": "mech", "number": 20 } }, { "coordinates": { "x": 1, "y": 89 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 3, "y": 11 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 54, "y": 19 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 22, "y": 38 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 3, "y": 10 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 43, "y": 13 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 51, "y": 13 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 91, "y": 30 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 11, "y": 30 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 91, "y": 15 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 51, "y": 22 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 91, "y": 10 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 11, "y": 84 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 91, "y": 65 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 81, "y": 53 }, "enemies": { "type": "mech", "number": 30 } }, { "coordinates": { "x": 15, "y": 70 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 19, "y": 83 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 11, "y": 46 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 59, "y": 26 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 98, "y": 57 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 11, "y": 58 }, "enemies": { "type": "mech", "number": 80 } }, { "coordinates": { "x": 91, "y": 39 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 83, "y": 37 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 11 }, "enemies": { "type": "mech", "number": 1 } }] },
            response: { "x": 3, "y": 10 }
        },
        {
            bodyRequest: { "protocols": ["furthest-enemies"], "scan": [{ "coordinates": { "x": 89, "y": 13 }, "enemies": { "type": "mech", "number": 1 } }, { "coordinates": { "x": 11, "y": 35 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 19, "y": 49 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 38, "y": 21 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 10, "y": 39 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 13, "y": 38 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 13, "y": 15 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 30, "y": 19 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 15, "y": 19 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 22, "y": 15 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 10, "y": 19 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 94, "y": 11 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 10, "y": 19 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 90, "y": 18 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 80, "y": 51 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 70, "y": 91 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 30, "y": 95 }, "enemies": { "type": "mech", "number": 20 } }, { "coordinates": { "x": 1, "y": 89 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 3, "y": 11 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 54, "y": 19 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 22, "y": 38 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 3, "y": 10 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 43, "y": 13 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 51, "y": 13 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 91, "y": 30 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 11, "y": 30 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 91, "y": 15 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 51, "y": 22 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 91, "y": 10 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 11, "y": 84 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 91, "y": 65 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 81, "y": 53 }, "enemies": { "type": "mech", "number": 30 } }, { "coordinates": { "x": 15, "y": 70 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 19, "y": 83 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 11, "y": 46 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 59, "y": 26 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 98, "y": 57 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 11, "y": 58 }, "enemies": { "type": "mech", "number": 80 } }, { "coordinates": { "x": 91, "y": 39 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 83, "y": 37 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 11 }, "enemies": { "type": "mech", "number": 1 } }] },
            response: { "x": 30, "y": 95 }
        },
        {
            bodyRequest: { "protocols": ["furthest-enemies", "avoid-mech"], "scan": [{ "coordinates": { "x": 89, "y": 13 }, "enemies": { "type": "mech", "number": 1 } }, { "coordinates": { "x": 11, "y": 35 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 19, "y": 49 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 38, "y": 21 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 10, "y": 39 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 13, "y": 38 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 13, "y": 15 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 30, "y": 19 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 15, "y": 19 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 22, "y": 15 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 10, "y": 19 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 94, "y": 11 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 10, "y": 19 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 90, "y": 18 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 80, "y": 51 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 70, "y": 91 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 30, "y": 95 }, "enemies": { "type": "mech", "number": 20 } }, { "coordinates": { "x": 1, "y": 89 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 3, "y": 11 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 54, "y": 19 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 22, "y": 38 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 3, "y": 10 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 43, "y": 13 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 51, "y": 13 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 91, "y": 30 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 11, "y": 30 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 91, "y": 15 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 51, "y": 22 }, "enemies": { "type": "soldier", "number": 80 } }, { "coordinates": { "x": 91, "y": 10 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 11, "y": 84 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 91, "y": 65 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 81, "y": 53 }, "enemies": { "type": "mech", "number": 30 } }, { "coordinates": { "x": 15, "y": 70 }, "enemies": { "type": "soldier", "number": 30 } }, { "coordinates": { "x": 19, "y": 83 }, "enemies": { "type": "soldier", "number": 15 } }, { "coordinates": { "x": 11, "y": 46 }, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "x": 59, "y": 26 }, "enemies": { "type": "soldier", "number": 40 } }, { "coordinates": { "x": 98, "y": 57 }, "enemies": { "type": "soldier", "number": 20 } }, { "coordinates": { "x": 11, "y": 58 }, "enemies": { "type": "mech", "number": 80 } }, { "coordinates": { "x": 91, "y": 39 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 83, "y": 37 }, "enemies": { "type": "mech", "number": 10 } }, { "coordinates": { "x": 0, "y": 11 }, "enemies": { "type": "mech", "number": 1 } }] },
            response: { "x": 91, "y": 30 }
        },
        {
            bodyRequest: { "protocols": ["closest-enemies", "prioritize-mech"], "scan": [{ "enemies": { "number": 1, "type": "mech" }, "coordinates": { "x": 89, "y": 13 } }, { "enemies": { "type": "soldier", "number": 10 }, "allies": 3, "coordinates": { "y": 35, "x": 11 } }, { "enemies": { "type": "soldier", "number": 10 }, "coordinates": { "y": 49, "x": 19 } }, { "enemies": { "type": "soldier", "number": 30 }, "allies": 5, "coordinates": { "y": 21, "x": 38 } }, { "enemies": { "number": 30, "type": "soldier" }, "allies": 8, "coordinates": { "x": 10, "y": 39 } }, { "enemies": { "type": "soldier", "number": 15 }, "coordinates": { "x": 13, "y": 38 } }, { "enemies": { "number": 60, "type": "soldier" }, "coordinates": { "x": 13, "y": 15 } }, { "enemies": { "number": 40, "type": "soldier" }, "coordinates": { "y": 19, "x": 30 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "number": 20, "type": "soldier" } }, { "coordinates": { "x": 15, "y": 19 }, "allies": 11, "enemies": { "number": 80, "type": "soldier" } }, { "coordinates": { "x": 22, "y": 15 }, "allies": 13, "enemies": { "number": 10, "type": "soldier" } }, { "coordinates": { "y": 19, "x": 10 }, "enemies": { "type": "soldier", "number": 10 } }, { "enemies": { "type": "soldier", "number": 10 }, "allies": 15, "coordinates": { "x": 94, "y": 11 } }, { "enemies": { "number": 30, "type": "soldier" }, "coordinates": { "x": 10, "y": 19 } }, { "enemies": { "type": "soldier", "number": 30 }, "allies": 16, "coordinates": { "x": 90, "y": 18 } }, { "enemies": { "number": 15, "type": "soldier" }, "allies": 5, "coordinates": { "y": 51, "x": 80 } }, { "enemies": { "type": "soldier", "number": 60 }, "allies": 5, "coordinates": { "y": 91, "x": 70 } }, { "enemies": { "type": "soldier", "number": 40 }, "coordinates": { "y": 11, "x": 30 } }, { "enemies": { "type": "mech", "number": 20 }, "coordinates": { "y": 95, "x": 30 } }, { "enemies": { "type": "soldier", "number": 80 }, "allies": 8, "coordinates": { "x": 1, "y": 89 } }, { "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "x": 3, "y": 11 } }, { "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "x": 54, "y": 19 } }, { "enemies": { "type": "soldier", "number": 10 }, "coordinates": { "x": 22, "y": 38 } }, { "enemies": { "number": 30, "type": "soldier" }, "allies": 10, "coordinates": { "y": 10, "x": 3 } }, { "coordinates": { "x": 43, "y": 13 }, "enemies": { "number": 30, "type": "soldier" } }, { "enemies": { "number": 15, "type": "soldier" }, "allies": 10, "coordinates": { "x": 51, "y": 13 } }, { "coordinates": { "y": 30, "x": 91 }, "allies": 10, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "y": 30, "x": 11 }, "enemies": { "number": 40, "type": "soldier" } }, { "enemies": { "type": "soldier", "number": 20 }, "coordinates": { "x": 91, "y": 15 } }, { "enemies": { "number": 80, "type": "soldier" }, "allies": 10, "coordinates": { "y": 22, "x": 51 } }, { "coordinates": { "x": 91, "y": 10 }, "enemies": { "number": 10, "type": "mech" } }, { "enemies": { "type": "soldier", "number": 10 }, "coordinates": { "x": 11, "y": 84 } }, { "enemies": { "number": 10, "type": "soldier" }, "allies": 10, "coordinates": { "x": 91, "y": 65 } }, { "enemies": { "number": 30, "type": "mech" }, "allies": 3, "coordinates": { "y": 53, "x": 81 } }, { "coordinates": { "y": 70, "x": 15 }, "allies": 4, "enemies": { "type": "soldier", "number": 30 } }, { "enemies": { "type": "soldier", "number": 15 }, "allies": 4, "coordinates": { "y": 83, "x": 19 } }, { "enemies": { "number": 60, "type": "soldier" }, "coordinates": { "y": 46, "x": 11 } }, { "coordinates": { "y": 26, "x": 59 }, "allies": 6, "enemies": { "type": "soldier", "number": 40 } }, { "enemies": { "number": 20, "type": "soldier" }, "allies": 6, "coordinates": { "x": 98, "y": 57 } }, { "enemies": { "number": 80, "type": "mech" }, "coordinates": { "x": 11, "y": 58 } }, { "enemies": { "number": 10, "type": "mech" }, "coordinates": { "x": 91, "y": 39 } }, { "coordinates": { "x": 83, "y": 37 }, "enemies": { "type": "mech", "number": 10 } }, { "enemies": { "type": "mech", "number": 1 }, "allies": 6, "coordinates": { "y": 11, "x": 0 } }] },
            response: { "x": 0, "y": 11 }
        },
        {
            bodyRequest: { "protocols": ["closest-enemies", "prioritize-mech", "avoid-crossfire"], "scan": [{ "enemies": { "number": 1, "type": "mech" }, "coordinates": { "x": 89, "y": 13 } }, { "enemies": { "type": "soldier", "number": 10 }, "allies": 3, "coordinates": { "y": 35, "x": 11 } }, { "enemies": { "type": "soldier", "number": 10 }, "coordinates": { "y": 49, "x": 19 } }, { "enemies": { "type": "soldier", "number": 30 }, "allies": 5, "coordinates": { "y": 21, "x": 38 } }, { "enemies": { "number": 30, "type": "soldier" }, "allies": 8, "coordinates": { "x": 10, "y": 39 } }, { "enemies": { "type": "soldier", "number": 15 }, "coordinates": { "x": 13, "y": 38 } }, { "enemies": { "number": 60, "type": "soldier" }, "coordinates": { "x": 13, "y": 15 } }, { "enemies": { "number": 40, "type": "soldier" }, "coordinates": { "y": 19, "x": 30 } }, { "coordinates": { "x": 30, "y": 11 }, "enemies": { "number": 20, "type": "soldier" } }, { "coordinates": { "x": 15, "y": 19 }, "allies": 11, "enemies": { "number": 80, "type": "soldier" } }, { "coordinates": { "x": 22, "y": 15 }, "allies": 13, "enemies": { "number": 10, "type": "soldier" } }, { "coordinates": { "y": 19, "x": 10 }, "enemies": { "type": "soldier", "number": 10 } }, { "enemies": { "type": "soldier", "number": 10 }, "allies": 15, "coordinates": { "x": 94, "y": 11 } }, { "enemies": { "number": 30, "type": "soldier" }, "coordinates": { "x": 10, "y": 19 } }, { "enemies": { "type": "soldier", "number": 30 }, "allies": 16, "coordinates": { "x": 90, "y": 18 } }, { "enemies": { "number": 15, "type": "soldier" }, "allies": 5, "coordinates": { "y": 51, "x": 80 } }, { "enemies": { "type": "soldier", "number": 60 }, "allies": 5, "coordinates": { "y": 91, "x": 70 } }, { "enemies": { "type": "soldier", "number": 40 }, "coordinates": { "y": 11, "x": 30 } }, { "enemies": { "type": "mech", "number": 20 }, "coordinates": { "y": 95, "x": 30 } }, { "enemies": { "type": "soldier", "number": 80 }, "allies": 8, "coordinates": { "x": 1, "y": 89 } }, { "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "x": 3, "y": 11 } }, { "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "x": 54, "y": 19 } }, { "enemies": { "type": "soldier", "number": 10 }, "coordinates": { "x": 22, "y": 38 } }, { "enemies": { "number": 30, "type": "soldier" }, "allies": 10, "coordinates": { "y": 10, "x": 3 } }, { "coordinates": { "x": 43, "y": 13 }, "enemies": { "number": 30, "type": "soldier" } }, { "enemies": { "number": 15, "type": "soldier" }, "allies": 10, "coordinates": { "x": 51, "y": 13 } }, { "coordinates": { "y": 30, "x": 91 }, "allies": 10, "enemies": { "type": "soldier", "number": 60 } }, { "coordinates": { "y": 30, "x": 11 }, "enemies": { "number": 40, "type": "soldier" } }, { "enemies": { "type": "soldier", "number": 20 }, "coordinates": { "x": 91, "y": 15 } }, { "enemies": { "number": 80, "type": "soldier" }, "allies": 10, "coordinates": { "y": 22, "x": 51 } }, { "coordinates": { "x": 91, "y": 10 }, "enemies": { "number": 10, "type": "mech" } }, { "enemies": { "type": "soldier", "number": 10 }, "coordinates": { "x": 11, "y": 84 } }, { "enemies": { "number": 10, "type": "soldier" }, "allies": 10, "coordinates": { "x": 91, "y": 65 } }, { "enemies": { "number": 30, "type": "mech" }, "allies": 3, "coordinates": { "y": 53, "x": 81 } }, { "coordinates": { "y": 70, "x": 15 }, "allies": 4, "enemies": { "type": "soldier", "number": 30 } }, { "enemies": { "type": "soldier", "number": 15 }, "allies": 4, "coordinates": { "y": 83, "x": 19 } }, { "enemies": { "number": 60, "type": "soldier" }, "coordinates": { "y": 46, "x": 11 } }, { "coordinates": { "y": 26, "x": 59 }, "allies": 6, "enemies": { "type": "soldier", "number": 40 } }, { "enemies": { "number": 20, "type": "soldier" }, "allies": 6, "coordinates": { "x": 98, "y": 57 } }, { "enemies": { "number": 80, "type": "mech" }, "coordinates": { "x": 11, "y": 58 } }, { "enemies": { "number": 10, "type": "mech" }, "coordinates": { "x": 91, "y": 39 } }, { "coordinates": { "x": 83, "y": 37 }, "enemies": { "type": "mech", "number": 10 } }, { "enemies": { "type": "mech", "number": 1 }, "allies": 6, "coordinates": { "y": 11, "x": 0 } }] },
            response: { "x": 11, "y": 58 }
        }

    ]

    //UNIT TESTS

    //Validators
    public static validationTests = {
        noValidRequest: [
            {
                input: { "protocols": ["avoid-mech"], "scan": [{ "coordinates": { "x": 0, "y": 40 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 80 }, "allies": 5, "enemies": { "type": "mech", "number": 1 } }] },
                output: false
            },
            {
                input: { "protocols": ["prioritize-mech"], "scan": [{ "coordinates": { "x": 0, "y": 40 }, "enemies": { "type": "soldier", "number": 10 } }, { "coordinates": { "x": 0, "y": 80 }, "allies": 5, "enemies": { "type": "mech", "number": 1 } }] },
                output: false
            },
            {
                input: { "protocols": [], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "soldier" }, "coordinates": { "y": 30, "x": 10 } }] },
                output: true
            },
            {
                input: { "protocols": ["furthest-enemies"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "y": 35, "x": 5 } }, { "enemies": { "number": 20, "type": "max" }, "coordinates": { "y": 30, "x": 10 } }] },
                output: true
            },
            {
                input: { "protocols": ["furthest-enemies"], "scan": [{ "enemies": { "number": 10, "type": "soldier" }, "coordinates": { "y": 35, "x": null } }, { "enemies": { "number": 20, "type": "mech" }, "coordinates": { "y": 30, "x": 10 } }] },
                output: false
            }

        ]
    }

    //Protocols
    public static protocolTests = {
        inputs: [
            [
                {
                    coordinates: { x: 0, y: 40 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 0, y: 80 },
                    allies: 5,
                    enemies: { type: 'mech', number: 1 }
                }
            ],
            [
                {
                    enemies: { number: 10, type: 'soldier' },
                    coordinates: { y: 35, x: 5 }
                },
                {
                    enemies: { number: 20, type: 'soldier' },
                    coordinates: { y: 30, x: 10 }
                }
            ],
            [
                {
                    coordinates: { x: 89, y: 13 },
                    enemies: { type: 'mech', number: 1 }
                },
                {
                    coordinates: { x: 11, y: 35 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 19, y: 49 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 38, y: 21 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 10, y: 39 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 13, y: 38 },
                    enemies: { type: 'soldier', number: 15 }
                },
                {
                    coordinates: { x: 13, y: 15 },
                    enemies: { type: 'soldier', number: 60 }
                },
                {
                    coordinates: { x: 30, y: 19 },
                    enemies: { type: 'soldier', number: 40 }
                },
                {
                    coordinates: { x: 30, y: 11 },
                    enemies: { type: 'soldier', number: 20 }
                },
                {
                    coordinates: { x: 15, y: 19 },
                    enemies: { type: 'soldier', number: 80 }
                },
                {
                    coordinates: { x: 22, y: 15 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 10, y: 19 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 94, y: 11 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 10, y: 19 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 90, y: 18 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 80, y: 51 },
                    enemies: { type: 'soldier', number: 15 }
                },
                {
                    coordinates: { x: 30, y: 11 },
                    enemies: { type: 'soldier', number: 40 }
                },
                {
                    coordinates: { x: 30, y: 95 },
                    enemies: { type: 'mech', number: 20 }
                },
                {
                    coordinates: { x: 1, y: 89 },
                    enemies: { type: 'soldier', number: 80 }
                },
                {
                    coordinates: { x: 3, y: 11 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 54, y: 19 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 22, y: 38 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 3, y: 10 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 43, y: 13 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 51, y: 13 },
                    enemies: { type: 'soldier', number: 15 }
                },
                {
                    coordinates: { x: 91, y: 30 },
                    enemies: { type: 'soldier', number: 60 }
                },
                {
                    coordinates: { x: 11, y: 30 },
                    enemies: { type: 'soldier', number: 40 }
                },
                {
                    coordinates: { x: 91, y: 15 },
                    enemies: { type: 'soldier', number: 20 }
                },
                {
                    coordinates: { x: 51, y: 22 },
                    enemies: { type: 'soldier', number: 80 }
                },
                {
                    coordinates: { x: 91, y: 10 },
                    enemies: { type: 'mech', number: 10 }
                },
                {
                    coordinates: { x: 11, y: 84 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 81, y: 53 },
                    enemies: { type: 'mech', number: 30 }
                },
                {
                    coordinates: { x: 15, y: 70 },
                    enemies: { type: 'soldier', number: 30 }
                },
                {
                    coordinates: { x: 19, y: 83 },
                    enemies: { type: 'soldier', number: 15 }
                },
                {
                    coordinates: { x: 11, y: 46 },
                    enemies: { type: 'soldier', number: 60 }
                },
                {
                    coordinates: { x: 59, y: 26 },
                    enemies: { type: 'soldier', number: 40 }
                },
                {
                    coordinates: { x: 11, y: 58 },
                    enemies: { type: 'mech', number: 80 }
                },
                {
                    coordinates: { x: 91, y: 39 },
                    enemies: { type: 'mech', number: 10 }
                },
                {
                    coordinates: { x: 83, y: 37 },
                    enemies: { type: 'soldier', number: 10 }
                },
                {
                    coordinates: { x: 0, y: 11 },
                    enemies: { type: 'mech', number: 1 }
                }
            ]
        ],
        outputs: {
            closestEnemies: [
                [
                    {
                        coordinates: { x: 0, y: 40 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 0, y: 80 },
                        allies: 5,
                        enemies: { type: 'mech', number: 1 }
                    }
                ],
                [
                    {
                        enemies: { number: 20, type: 'soldier' },
                        coordinates: { y: 30, x: 10 }
                    },
                    {
                        enemies: { number: 10, type: 'soldier' },
                        coordinates: { y: 35, x: 5 }
                    }
                ],
                [
                    {
                        coordinates: { x: 3, y: 10 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 0, y: 11 },
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 3, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 13, y: 15 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 15, y: 19 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 22, y: 15 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 11, y: 30 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 30, y: 19 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 11, y: 35 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 13, y: 38 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 10, y: 39 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 38, y: 21 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 22, y: 38 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 43, y: 13 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 11, y: 46 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 19, y: 49 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 51, y: 13 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 51, y: 22 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 54, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 11, y: 58 },
                        enemies: { type: 'mech', number: 80 }
                    },
                    {
                        coordinates: { x: 59, y: 26 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 15, y: 70 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 11, y: 84 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 19, y: 83 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 1, y: 89 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 89, y: 13 },
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 83, y: 37 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 91, y: 10 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 90, y: 18 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 91, y: 15 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 94, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 80, y: 51 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 91, y: 30 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 81, y: 53 },
                        enemies: { type: 'mech', number: 30 }
                    },
                    {
                        coordinates: { x: 91, y: 39 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 30, y: 95 },
                        enemies: { type: 'mech', number: 20 }
                    }
                ]
            ],
            furthestEnemies: [
                [
                    {
                        coordinates: { x: 0, y: 80 },
                        allies: 5,
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 0, y: 40 },
                        enemies: { type: 'soldier', number: 10 }
                    }
                ],
                [
                    {
                        enemies: { number: 10, type: 'soldier' },
                        coordinates: { y: 35, x: 5 }
                    },
                    {
                        enemies: { number: 20, type: 'soldier' },
                        coordinates: { y: 30, x: 10 }
                    }
                ],
                [
                    {
                        coordinates: { x: 30, y: 95 },
                        enemies: { type: 'mech', number: 20 }
                    },
                    {
                        coordinates: { x: 91, y: 39 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 81, y: 53 },
                        enemies: { type: 'mech', number: 30 }
                    },
                    {
                        coordinates: { x: 91, y: 30 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 80, y: 51 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 94, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 91, y: 15 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 90, y: 18 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 91, y: 10 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 83, y: 37 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 89, y: 13 },
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 1, y: 89 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 19, y: 83 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 11, y: 84 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 15, y: 70 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 59, y: 26 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 11, y: 58 },
                        enemies: { type: 'mech', number: 80 }
                    },
                    {
                        coordinates: { x: 54, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 51, y: 22 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 51, y: 13 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 19, y: 49 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 11, y: 46 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 43, y: 13 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 22, y: 38 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 38, y: 21 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 10, y: 39 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 13, y: 38 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 11, y: 35 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 30, y: 19 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 11, y: 30 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 22, y: 15 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 15, y: 19 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 13, y: 15 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 3, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 0, y: 11 },
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 3, y: 10 },
                        enemies: { type: 'soldier', number: 30 }
                    }
                ]
            ],
            assistAllies: [
                [
                    {
                        coordinates: { x: 0, y: 80 },
                        allies: 5,
                        enemies: { type: 'mech', number: 1 }
                    }
                ],
                [],
                []
            ],
            avoidCrossfire: [
                [
                    {
                        coordinates: { x: 0, y: 40 },
                        enemies: { type: 'soldier', number: 10 }
                    }
                ],
                [
                    {
                        enemies: { number: 10, type: 'soldier' },
                        coordinates: { y: 35, x: 5 }
                    },
                    {
                        enemies: { number: 20, type: 'soldier' },
                        coordinates: { y: 30, x: 10 }
                    }
                ],
                [
                    {
                        coordinates: { x: 89, y: 13 },
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 11, y: 35 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 19, y: 49 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 38, y: 21 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 10, y: 39 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 13, y: 38 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 13, y: 15 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 30, y: 19 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 15, y: 19 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 22, y: 15 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 94, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 90, y: 18 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 80, y: 51 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 30, y: 95 },
                        enemies: { type: 'mech', number: 20 }
                    },
                    {
                        coordinates: { x: 1, y: 89 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 3, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 54, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 22, y: 38 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 3, y: 10 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 43, y: 13 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 51, y: 13 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 91, y: 30 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 11, y: 30 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 91, y: 15 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 51, y: 22 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 91, y: 10 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 11, y: 84 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 81, y: 53 },
                        enemies: { type: 'mech', number: 30 }
                    },
                    {
                        coordinates: { x: 15, y: 70 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 19, y: 83 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 11, y: 46 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 59, y: 26 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 11, y: 58 },
                        enemies: { type: 'mech', number: 80 }
                    },
                    {
                        coordinates: { x: 91, y: 39 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 83, y: 37 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 0, y: 11 },
                        enemies: { type: 'mech', number: 1 }
                    }
                ]

            ],
            prioritizeMech: [
                [
                    {
                        coordinates: { x: 0, y: 80 },
                        allies: 5,
                        enemies: { type: 'mech', number: 1 }
                    }
                ],
                [],
                [
                    {
                        coordinates: { x: 89, y: 13 },
                        enemies: { type: 'mech', number: 1 }
                    },
                    {
                        coordinates: { x: 30, y: 95 },
                        enemies: { type: 'mech', number: 20 }
                    },
                    {
                        coordinates: { x: 91, y: 10 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 81, y: 53 },
                        enemies: { type: 'mech', number: 30 }
                    },
                    {
                        coordinates: { x: 11, y: 58 },
                        enemies: { type: 'mech', number: 80 }
                    },
                    {
                        coordinates: { x: 91, y: 39 },
                        enemies: { type: 'mech', number: 10 }
                    },
                    {
                        coordinates: { x: 0, y: 11 },
                        enemies: { type: 'mech', number: 1 }
                    }
                ]
            ],
            avoidMech: [
                [
                    {
                        coordinates: { x: 0, y: 40 },
                        enemies: { type: 'soldier', number: 10 }
                    }
                ],
                [
                    {
                        enemies: { number: 10, type: 'soldier' },
                        coordinates: { y: 35, x: 5 }
                    },
                    {
                        enemies: { number: 20, type: 'soldier' },
                        coordinates: { y: 30, x: 10 }
                    }
                ],
                [
                    {
                        coordinates: { x: 11, y: 35 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 19, y: 49 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 38, y: 21 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 10, y: 39 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 13, y: 38 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 13, y: 15 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 30, y: 19 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 15, y: 19 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 22, y: 15 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 94, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 10, y: 19 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 90, y: 18 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 80, y: 51 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 30, y: 11 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 1, y: 89 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 3, y: 11 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 54, y: 19 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 22, y: 38 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 3, y: 10 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 43, y: 13 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 51, y: 13 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 91, y: 30 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 11, y: 30 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 91, y: 15 },
                        enemies: { type: 'soldier', number: 20 }
                    },
                    {
                        coordinates: { x: 51, y: 22 },
                        enemies: { type: 'soldier', number: 80 }
                    },
                    {
                        coordinates: { x: 11, y: 84 },
                        enemies: { type: 'soldier', number: 10 }
                    },
                    {
                        coordinates: { x: 15, y: 70 },
                        enemies: { type: 'soldier', number: 30 }
                    },
                    {
                        coordinates: { x: 19, y: 83 },
                        enemies: { type: 'soldier', number: 15 }
                    },
                    {
                        coordinates: { x: 11, y: 46 },
                        enemies: { type: 'soldier', number: 60 }
                    },
                    {
                        coordinates: { x: 59, y: 26 },
                        enemies: { type: 'soldier', number: 40 }
                    },
                    {
                        coordinates: { x: 83, y: 37 },
                        enemies: { type: 'soldier', number: 10 }
                    }
                ]
            ],
        }


    }

    //Auxiliar Methods
    public static filterByProtocolType = [
        {
            input: {
                protocols: ['closest-enemies', 'furthest-enemies'],
                pointsPerProtocol: [
                    {
                        protocol: 'avoid-metch',
                        points: [
                            { x: 11, y: 35 }, { x: 19, y: 49 },
                            { x: 38, y: 21 }, { x: 10, y: 39 },
                            { x: 13, y: 38 }, { x: 13, y: 15 },
                            { x: 30, y: 19 }, { x: 30, y: 11 },
                            { x: 15, y: 19 }, { x: 22, y: 15 },
                            { x: 10, y: 19 }, { x: 94, y: 11 },
                            { x: 10, y: 19 }, { x: 90, y: 18 },
                            { x: 80, y: 51 }, { x: 30, y: 11 },
                            { x: 1, y: 89 }, { x: 3, y: 11 },
                            { x: 54, y: 19 }, { x: 22, y: 38 },
                            { x: 3, y: 10 }, { x: 43, y: 13 },
                            { x: 51, y: 13 }, { x: 91, y: 30 },
                            { x: 11, y: 30 }, { x: 91, y: 15 },
                            { x: 51, y: 22 }, { x: 11, y: 84 },
                            { x: 15, y: 70 }, { x: 19, y: 83 },
                            { x: 11, y: 46 }, { x: 59, y: 26 },
                            { x: 83, y: 37 }
                        ]
                    }
                ]
            },
            output: [
            ]
        },
        {
            input: {
                protocols: ['assist-allies', 'avoid-crossfire', 'prioritize-mech', 'avoid-mech'],
                pointsPerProtocol: [
                    { 
                        protocol: "closest-enemies", 
                        points: [
                            { y: 10, x: 3 }, 
                            { y: 11, x: 0 }, 
                            { x: 3, y: 11 }, 
                            { x: 13, y: 15 }, 
                            { y: 19, x: 10 }, 
                            { x: 10, y: 19 }, 
                            { x: 15, y: 19 }, 
                            { x: 22, y: 15 }, 
                            { x: 30, y: 11 }, 
                            { y: 11, x: 30 }, 
                            { y: 30, x: 11 },
                            { y: 19, x: 30 }, 
                            { y: 35, x: 11 }, 
                            { x: 13, y: 38 }, 
                            { x: 10, y: 39 }, 
                            { y: 21, x: 38 }, 
                            { x: 22, y: 38 }, 
                            { x: 43, y: 13 }, 
                            { y: 46, x: 11 }, 
                            { y: 49, x: 19 }, 
                            { x: 51, y: 13 }, 
                            { y: 22, x: 51 }, 
                            { x: 54, y: 19 },
                            { x: 11, y: 58 }, 
                            { y: 26, x: 59 }, 
                            { y: 70, x: 15 }, 
                            { x: 11, y: 84 }, 
                            { y: 83, x: 19 }, 
                            { x: 1, y: 89 }, 
                            { x: 89, y: 13 }, 
                            { x: 83, y: 37 }, 
                            { x: 91, y: 10 }, 
                            { x: 90, y: 18 }, 
                            { x: 91, y: 15 }, 
                            { x: 94, y: 11 }, 
                            { y: 51, x: 80 }, 
                            { y: 30, x: 91 }, 
                            { y: 53, x: 81 }, 
                            { x: 91, y: 39 }, 
                            { y: 95, x: 30 }
                        ] 
                    }, 
                    { 
                        protocol: "prioritize-mech", 
                        points: [
                            { y: 11, x: 0 }, 
                            { x: 11, y: 58 }, 
                            { x: 89, y: 13 },
                            { x: 83, y: 37 }, 
                            { x: 91, y: 10 }, 
                            { y: 53, x: 81 }, 
                            { x: 91, y: 39 }, 
                            { y: 95, x: 30 }
                        ] 
                    }
                ]
            },
            output: [
                [
                  { y: 11, x: 0 },
                  { x: 11, y: 58 },
                  { x: 89, y: 13 },
                  { x: 83, y: 37 },
                  { x: 91, y: 10 },
                  { y: 53, x: 81 },
                  { x: 91, y: 39 },
                  { y: 95, x: 30 }
                ]
              ]
        },
        {
            input: {
                protocols: ['closest-enemies', 'furthest-enemies'],
                pointsPerProtocol: [
                    { 
                        protocol: "closest-enemies", 
                        points: [
                            { y: 10, x: 3 }, 
                            { y: 11, x: 0 }, 
                            { x: 3, y: 11 }, 
                            { x: 13, y: 15 }, 
                            { y: 19, x: 10 }, 
                            { x: 10, y: 19 }, 
                            { x: 15, y: 19 }, 
                            { x: 22, y: 15 }, 
                            { x: 30, y: 11 }, 
                            { y: 11, x: 30 }, 
                            { y: 30, x: 11 },
                            { y: 19, x: 30 }, 
                            { y: 35, x: 11 }, 
                            { x: 13, y: 38 }, 
                            { x: 10, y: 39 }, 
                            { y: 21, x: 38 }, 
                            { x: 22, y: 38 }, 
                            { x: 43, y: 13 }, 
                            { y: 46, x: 11 }, 
                            { y: 49, x: 19 }, 
                            { x: 51, y: 13 }, 
                            { y: 22, x: 51 }, 
                            { x: 54, y: 19 },
                            { x: 11, y: 58 }, 
                            { y: 26, x: 59 }, 
                            { y: 70, x: 15 }, 
                            { x: 11, y: 84 }, 
                            { y: 83, x: 19 }, 
                            { x: 1, y: 89 }, 
                            { x: 89, y: 13 }, 
                            { x: 83, y: 37 }, 
                            { x: 91, y: 10 }, 
                            { x: 90, y: 18 }, 
                            { x: 91, y: 15 }, 
                            { x: 94, y: 11 }, 
                            { y: 51, x: 80 }, 
                            { y: 30, x: 91 }, 
                            { y: 53, x: 81 }, 
                            { x: 91, y: 39 }, 
                            { y: 95, x: 30 }
                        ] 
                    }, 
                    { 
                        protocol: "prioritize-mech", 
                        points: [
                            { y: 11, x: 0 }, 
                            { x: 11, y: 58 }, 
                            { x: 89, y: 13 },
                            { x: 83, y: 37 }, 
                            { x: 91, y: 10 }, 
                            { y: 53, x: 81 }, 
                            { x: 91, y: 39 }, 
                            { y: 95, x: 30 }
                        ] 
                    }
                ]
            },
            output: [[
                { y: 10, x: 3 },  { y: 11, x: 0 },  { x: 3, y: 11 },
                { x: 13, y: 15 }, { y: 19, x: 10 }, { x: 10, y: 19 },
                { x: 15, y: 19 }, { x: 22, y: 15 }, { x: 30, y: 11 },
                { y: 11, x: 30 }, { y: 30, x: 11 }, { y: 19, x: 30 },
                { y: 35, x: 11 }, { x: 13, y: 38 }, { x: 10, y: 39 },
                { y: 21, x: 38 }, { x: 22, y: 38 }, { x: 43, y: 13 },
                { y: 46, x: 11 }, { y: 49, x: 19 }, { x: 51, y: 13 },
                { y: 22, x: 51 }, { x: 54, y: 19 }, { x: 11, y: 58 },
                { y: 26, x: 59 }, { y: 70, x: 15 }, { x: 11, y: 84 },
                { y: 83, x: 19 }, { x: 1, y: 89 },  { x: 89, y: 13 },
                { x: 83, y: 37 }, { x: 91, y: 10 }, { x: 90, y: 18 },
                { x: 91, y: 15 }, { x: 94, y: 11 }, { y: 51, x: 80 },
                { y: 30, x: 91 }, { y: 53, x: 81 }, { x: 91, y: 39 },
                { y: 95, x: 30 }
              ]
            ]
        }
    ]

    public static getCommonDisorderlyElements = [
        {
            input: [
                [
                  { y: 11, x: 0 },
                  { x: 11, y: 58 },
                  { x: 89, y: 13 },
                  { x: 83, y: 37 },
                  { x: 91, y: 10 },
                  { y: 53, x: 81 },
                  { x: 91, y: 39 },
                  { y: 95, x: 30 }
                ]
              ],
            output: [
                { y: 11, x: 0 },
                { x: 11, y: 58 },
                { x: 89, y: 13 },
                { x: 83, y: 37 },
                { x: 91, y: 10 },
                { y: 53, x: 81 },
                { x: 91, y: 39 },
                { y: 95, x: 30 }
            ]
        },
        {
            input: [
                [
                  { x: 0,  y: 11 },
                  { x: 11, y: 58 },
                  { x: 89, y: 13 },
                  { x: 83, y: 37 },
                  { x: 91, y: 10 },
                  { x: 81, y: 53 },
                  { x: 91, y: 39 },
                  { x: 30, y: 95 }
                ],
                [
                  { x: 3, y: 11 },  { x: 13, y: 15 },
                  { y: 19, x: 10 }, { x: 10, y: 19 },
                  { x: 30, y: 11 }, { y: 11, x: 30 },
                  { y: 30, x: 11 }, { y: 19, x: 30 },
                  { x: 13, y: 38 }, { x: 22, y: 38 },
                  { x: 43, y: 13 }, { y: 46, x: 11 },
                  { y: 49, x: 19 }, { x: 54, y: 19 },
                  { x: 11, y: 58 }, { x: 11, y: 84 },
                  { x: 89, y: 13 }, { x: 83, y: 37 },
                  { x: 91, y: 10 }, { x: 91, y: 15 },
                  { x: 91, y: 39 }, { y: 95, x: 30 }
                ]
              ],
            output: [
                { x: 11, y: 58 },
                { x: 89, y: 13 },
                { x: 83, y: 37 },
                { x: 91, y: 10 },
                { x: 91, y: 39 },
                { y: 95, x: 30 }
            ]
        },

    ]

    public static getCoordinateDistance = [
        {
            input: {x: 10, y: 30},
            output: 31.62
        },
        {
            input: {x: 5, y: 55},
            output: 55.23
        },
        {
            input: {x: 60, y:10},
            output: 60.83
        }, 
        {
            input: {x: 8, y: 8},
            output: 11.31
        },
    ]

    public static commonUncommonElements = {
        inputs: [
            [{x: 5, y: 7}, {x: 6, y: 8}, {x: 7, y: 9}, {x: 5, y: 7}, {x: 10, y: 15}, {x: 6, y: 8}],
            [{x: 7, y: 15}, {x: 6, y: 8}, {x: 8, y: 9}, {x: 5, y: 7}, {x: 7, y: 15}, {x: 7, y: 8}],
            [{x: 6, y: 4}, {x: 6, y: 8}, {x: 7, y: 9}, {x: 5, y: 7}, {x: 10, y: 15}, {x: 6, y: 4}]
        ],
        getDuplicatesOutput: [
            [{x: 5, y: 7}, {x: 6, y: 8}],
            [{x: 7, y: 15}],
            [{x: 6, y: 4}]
        ],
        removeDuplicates: [
            [{x: 5, y: 7}, {x: 6, y: 8}, {x: 7, y: 9}, {x: 10, y: 15}],
            [{x: 7, y: 15}, {x: 6, y: 8}, {x: 8, y: 9}, {x: 5, y: 7}, {x: 7, y: 8}],
            [{x: 6, y: 8}, {x: 7, y: 9}, {x: 5, y: 7}, {x: 10, y: 15}, {x: 6, y: 4}]
        ]

    }
}
