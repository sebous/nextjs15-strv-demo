const visits = new Map<string, number>();

async function saveProductVisit(id: string) {
	await new Promise((resolve) => setTimeout(resolve, 500));
	visits.set(id, (visits.get(id) ?? 0) + 1);
}

export const fakeDb = {
	saveProductVisit,
};
