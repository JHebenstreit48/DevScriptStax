import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavbarCollapseAndEvents = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Navigation/NavbarCollapseAndEvents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Navbar Collapse & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavbarCollapseAndEvents;
