import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavbarsAndTabs = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Navigation/NavbarsAndTabs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Navbars & Tabs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavbarsAndTabs;
