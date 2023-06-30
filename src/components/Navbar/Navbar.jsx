import { createStyles, Header, Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import TelLogo from "../../image/logo.png"
import Link from 'next/link';
import { data } from './NavbarData';
import Image from 'next/image';
const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
}));

export default function HeaderSearch() {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = data.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </Link>
    ));

    return (
        <Header height={70} className={classes.header} mb={120} classNames={"mx-auto container"}>


            <div className={classes.inner}>

                <Image src={TelLogo} width={150} className='object-cover' />

                <Autocomplete
                    className="{classes.search} w-[700px]"
                    placeholder="Search"
                    icon={<IconSearch size="1rem" stroke={1.5} />}
                    data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                />
                <Group>
                    <Group ml={50} spacing={5} className={classes.links}>
                        {items}
                    </Group>

                </Group>
                <Group className=''>
                    <Burger opened={opened} onClick={toggle} size="sm" />

                </Group>
            </div>
        </Header>
    );
}