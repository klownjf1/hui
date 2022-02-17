import React     from "react";
import {create} from 'react-test-renderer'
import  ProfileStatus from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="хуй" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("хуй");
    });
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusWithHooks status="хуй" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("хуй");
    });
});