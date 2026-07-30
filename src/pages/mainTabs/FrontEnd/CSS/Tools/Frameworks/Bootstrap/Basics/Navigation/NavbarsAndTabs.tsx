import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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