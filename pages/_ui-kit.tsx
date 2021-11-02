import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "components/layout/Container/Container";
import { Button } from "components/common/Button/Button";
import { Loader } from "components/common/Loader/Loader";
import { TextField } from "components/common/TextField/TextField";

import HeartIcon from "public/static/icons/heart-outlined.svg";
import SearchIcon from "public/static/icons/search.svg";

const UiKit: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>UiKit</title>
                <meta name="description" content="UiKit" />
            </Head>

            <br />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridGap: 20,
                    padding: 20
                }}
            >
                <div>
                    <Button size="large" variant="contained" fullWidth>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="contained" fullWidth>
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="contained" fullWidth>
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="contained">
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="contained">
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="contained">
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="contained" isLoading>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="contained" isLoading>
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="contained" isLoading>
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="contained" disabled>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="contained" icon={<HeartIcon />} />
                    <br />
                    <br />
                    <Button size="medium" variant="contained" icon={<HeartIcon />} />
                    <br />
                    <br />
                    <Button size="small" variant="contained" icon={<HeartIcon />} />
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="contained"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="contained"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="contained"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="contained"
                        icon={<HeartIcon />}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="contained"
                        icon={<HeartIcon />}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="contained"
                        icon={<HeartIcon />}
                        disabled
                    />
                </div>
                <div>
                    <Button size="large" variant="default" fullWidth>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="default" fullWidth>
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="default" fullWidth>
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="default">
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="default">
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="default">
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="default" isLoading>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="default" isLoading>
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="default" isLoading>
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="default" disabled>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="default" icon={<HeartIcon />} />
                    <br />
                    <br />
                    <Button size="medium" variant="default" icon={<HeartIcon />} />
                    <br />
                    <br />
                    <Button size="small" variant="default" icon={<HeartIcon />} />
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="default"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="default"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="default"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="default"
                        icon={<HeartIcon />}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="default"
                        icon={<HeartIcon />}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="default"
                        icon={<HeartIcon />}
                        disabled
                    />
                </div>
                <div>
                    <Button size="large" variant="transparent" fullWidth>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="transparent" fullWidth>
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="transparent" fullWidth>
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="transparent">
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="transparent">
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="transparent">
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="transparent" isLoading>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button size="medium" variant="transparent" isLoading>
                        Button Medium
                    </Button>
                    <br />
                    <br />
                    <Button size="small" variant="transparent" isLoading>
                        Button Small
                    </Button>
                    <br />
                    <br />
                    <Button size="large" variant="transparent" disabled>
                        Button Large
                    </Button>
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="transparent"
                        icon={<HeartIcon />}
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="transparent"
                        icon={<HeartIcon />}
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="transparent"
                        icon={<HeartIcon />}
                    />
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="transparent"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="transparent"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="transparent"
                        icon={<HeartIcon />}
                        isLoading
                    />
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="transparent"
                        icon={<HeartIcon />}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        size="medium"
                        variant="transparent"
                        icon={<HeartIcon />}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        size="small"
                        variant="transparent"
                        icon={<HeartIcon />}
                        disabled
                    />
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridGap: 20,
                        padding: 20
                    }}
                >
                    <Loader size={80} />
                    <Loader size={64} />
                    <Loader size={48} />
                    <Loader size={32} />
                    <Loader size={24} />
                    <Loader size={16} />
                </div>
                <div>
                    <TextField
                        placeholder="Placeholder"
                        icon={<SearchIcon width={20} height={20} />}
                        fullWidth
                    />
                    <br />
                    <br />
                    <TextField
                        placeholder="Placeholder"
                        icon={<SearchIcon width={20} height={20} />}
                    />
                    <br />
                    <br />
                    <TextField
                        placeholder="Placeholder"
                        icon={<SearchIcon width={20} height={20} />}
                        onIconClick={() => alert("search...")}
                    />
                    <br />
                    <br />
                    <TextField placeholder="Placeholder" />
                    <br />
                    <br />
                    <TextField placeholder="Placeholder" disabled />
                </div>
            </div>
        </Container>
    );
};

export default UiKit;
