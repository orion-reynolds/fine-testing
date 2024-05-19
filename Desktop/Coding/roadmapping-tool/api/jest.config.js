module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/tests/**/*.ts"],
	collectCoverage: true,
	collectCoverageFrom: ["!**/node_modules/**", "!./*.ts", "!**/coverage/**", "!**/reports/**", "!**/docs/**", "!**/scripts/**", "!**/jest-stare-report/**"],
	reporters: [
		"default",
		[
			"jest-html-reporter",
			{
				pageTitle: "Custom Jest HTML Reporter",
				includeFailureMsg: true, // Include failure messages in the HTML report
			},
		],
		[
			"jest-stare",
			{
				resultDir: "jest-stare-report", // Directory where reports will be saved
				reportTitle: "Jest Test Results", // Title of the report page
				additionalResultsProcessors: ["jest-junit"], // Optional: other result processors
				log: true, // Include console.log output in the report
				reportSummary: true,
				coverageLink: "../coverage/lcov-report/index.html",
			},
		],
	],
	verbose: true,
};
