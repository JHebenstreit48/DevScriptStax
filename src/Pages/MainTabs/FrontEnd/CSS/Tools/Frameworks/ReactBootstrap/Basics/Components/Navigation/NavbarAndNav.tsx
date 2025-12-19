import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavbarAndNav = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Navigation/NavbarAndNav';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Navbar & Nav" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavbarAndNav;
