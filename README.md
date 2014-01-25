system
======

Bringing method to the madness.

Wherein I attempt to document my system for creating applications using a
serverless architecture.

Editor
------

The primary component is the editor. It publishes applications to github pages.
Since the applications are simply static html files, they can be published
anywhere: self-hosted on a shared server, Amazon S3, run with nginx on dokku, 
or with a static Heroku buildpack. They can truly run anywhere.

[See it in action](/editor)

[More...](/editor/docs)

Services
--------

Services are front-end-less components that can be used by the "serverless"
applications. They can be hosted for free on Heroku, or you can self-host them
on dokku or similar.
