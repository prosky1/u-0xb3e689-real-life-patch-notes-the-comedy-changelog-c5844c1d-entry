# Real-Life Patch Notes: The Comedy Changelog

[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/prosky1/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/prosky1/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for the [make.fun bounty "Real-Life Patch Notes: The Comedy Changelog"](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d): one line, at most 160 characters — a software patch note for a bug in real life or human biology, in the terse register of a real release note.

## The patch note

> v1.9.4: fixed a bug where the brain autocorrected 'good morning' into an argument from three years ago.

The bug is one everyone recognises: a harmless greeting goes in, and the brain's autocorrect helpfully retrieves a three-year-old argument instead. The fix is stated exactly the way a real changelog would state it — version number, "fixed a bug where", no extra setup, every word working.

## How it works

`main.ts` writes the single line above to `/output/entry.txt` (103 characters, 103 bytes), after checking it against the competition gate: 1 to 160 characters, not only whitespace, no leading or trailing whitespace, and shaped like a real release note (`vX.Y.Z: fixed a bug where ...`). It reads the file back and confirms the text on disk matches exactly.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
