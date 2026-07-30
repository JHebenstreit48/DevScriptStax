import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NavbarAndNav = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Navigation/NavbarAndNav';

  return (
    <>
      <PageLayout>
        <PageTitle title="Navbar & Nav" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavbarAndNav;
