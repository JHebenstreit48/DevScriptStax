import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavbarsAndTabs = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/NavbarsAndTabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap Navigation - Navbars & Tabs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavbarsAndTabs;