function formatDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, 0);
	const day = date.getDate();
	const hours = String(date.getHours()).padStart(2, 0);
	const minutes = date.getMinutes();
	return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export { formatDate };
