import api from "./api.service";

export default class RequirementsService {
    async getDegreeRequirements(): Promise<any> {
        const response = await api.get("/requirements/degreeRequirements");
        return response.data;
    }

    async getGeneralDegreeRequirementes(): Promise<any> {
        const response = await api.get(
            "/requirements/generalDegreeRequirements"
        );
        return response.data;
    }

    async getHonorsRequirements(): Promise<any> {
        const response = await api.get("/requirements/honorsRequirements");
        return response.data;
    }

    async getDegreeRequirementByType(type: string): Promise<any> {
        const response = await api.get(
            `/requirements/degreeRequirements/${encodeURIComponent(type)}`
        );
        return response.data;
    }
}
