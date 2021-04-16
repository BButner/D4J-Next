import React from 'react'

export interface CodePreview {
    text: string;
    language: string;
    title: string;
}

export const getCodePreviews = (version: string): CodePreview[] => {
    return [
        {
            text: `<!-- pom.xml -->

<dependencies>
    <dependency>
    <groupId>com.discord4j</groupId>
    <artifactId>discord4j-core</artifactId>
    <version>${version}</version>
    </dependency>
</dependencies>`,
            language: 'xml',
            title: 'Maven'
        },
        {
            text: `// build.gradle

dependencies {
    implementation "com.discord4j:discord4j-core:${version}"
}
`,
            language: 'groovy',
            title: 'Gradle'
        },
        {
            text: `// build.sbt

libraryDependencies ++= Seq(
    "com.discord4j" % "discord4j-core" % "${version}"
)
`,
            language: 'java',
            title: 'SBT'
        }
    ]
}