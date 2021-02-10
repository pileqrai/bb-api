import {BreakingBadApi} from "./breaking-bad-api.js";
import sprintfPkg from 'sprintf-js';
const {sprintf} = sprintfPkg;
const args = process.argv.slice(2);

if(!args[0]) {
    throw 'Missing character(s) argument';
}

const characterArgument =  /^\[.*\]$/.test(args[0]) ? JSON.parse(args[0]) : args[0];

if (!characterArgument) {
    throw 'Bad character(s) argument format';
}

const characters = Array.isArray(characterArgument) ? characterArgument : [characterArgument];

BreakingBadApi.search(characters).then((result) => {
    const mappedResult = result.map(result => sprintf('S%02d%02d - %s', result.season, result.episode, result.title));
    console.log(mappedResult.length ? mappedResult : 'Not found');
});
