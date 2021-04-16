export interface TextLines {
    text: string;
    lines: number;
    language: string;
    title: string;
}

class ConfigurationSnippets {
    public version: string = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"

    /**
     * Gradle build.gradle configuration template
     */
    get gradle(): TextLines {
        return this.textLines(`// build.gradle

dependencies {
    implementation "com.discord4j:discord4j-core:${this.version}"
}
`, 'groovy', 'gradle')
    }

    /*
     * Maven pom.xml configuration template
     */
    get maven(): TextLines {
        return this.textLines(`<!-- pom.xml -->

<dependencies>
  <dependency>
    <groupId>com.discord4j</groupId>
    <artifactId>discord4j-core</artifactId>
    <version>${this.version}</version>
  </dependency>
</dependencies>
`, 'xml', 'maven')
    }

    /**
     * SBT configuration template
     */
    get sbt(): TextLines {
        return this.textLines(`// build.sbt

libraryDependencies ++= Seq(
    "com.discord4j" % "discord4j-core" % "${this.version}"
)
`, 'java', 'sbt')
    }

    private textLines(text: string, language: string, title: string): TextLines {
        return {
            text,
            lines: (text.match(/\n/g) || "").length,
            language,
            title
        }
    }
}

export default new ConfigurationSnippets()

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