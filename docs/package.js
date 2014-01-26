(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "system\n======\n\nBringing method to the madness.\n\nWherein I attempt to document my system for creating applications using a\nserverless architecture.\n\nEditor\n------\n\nThe primary component is the editor. It publishes applications to github pages.\nSince the applications are simply static html files, they can be published\nanywhere: self-hosted on a shared server, Amazon S3, run with nginx on dokku, \nor with a static Heroku buildpack. They can truly run anywhere.\n\n[See it in action](/editor)\n\n[More...](/editor/docs)\n\nCLI\n---\n\nIf the self hosting web based editor isn't your thing you can use whatever tools\nyou like on your local computer, then build the app with our CLI.\n\n[More...](http://distri.github.io/cli/docs)\n\nServices\n--------\n\nServices are front-end-less components that can be used by the \"serverless\"\napplications. They can be hosted for free on Heroku, or you can self-host them\non dokku or similar.\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "entryPoint: \"README\"\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"entryPoint\":\"README\"};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "entryPoint": "README",
  "repository": {
    "id": 16185541,
    "name": "system",
    "full_name": "STRd6/system",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/system",
    "description": "Bringing method to the madness.",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/system",
    "forks_url": "https://api.github.com/repos/STRd6/system/forks",
    "keys_url": "https://api.github.com/repos/STRd6/system/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/system/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/system/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/system/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/system/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/system/events",
    "assignees_url": "https://api.github.com/repos/STRd6/system/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/system/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/system/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/system/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/system/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/system/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/system/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/system/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/system/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/system/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/system/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/system/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/system/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/system/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/system/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/system/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/system/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/system/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/system/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/system/merges",
    "archive_url": "https://api.github.com/repos/STRd6/system/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/system/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/system/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/system/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/system/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/system/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/system/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/system/releases{/id}",
    "created_at": "2014-01-23T21:01:31Z",
    "updated_at": "2014-01-23T21:01:31Z",
    "pushed_at": "2014-01-23T21:01:31Z",
    "git_url": "git://github.com/STRd6/system.git",
    "ssh_url": "git@github.com:STRd6/system.git",
    "clone_url": "https://github.com/STRd6/system.git",
    "svn_url": "https://github.com/STRd6/system",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});