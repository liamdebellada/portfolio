export type GithubContent = {
    name: string,
    path: string,
    sha: string,
    size: number,
    url: string,
    html_url: string,
    git_url: string,
    download_url: string,
    type: string,
    _links: {
        self: string,
        git: string,
        html: string
    }
}

export type RepoItem = {
    display_title: string,
    short_description: string,
    raw_md?: string,
    repo_url: string,
    display_image: string,
    display_slide: string
}
