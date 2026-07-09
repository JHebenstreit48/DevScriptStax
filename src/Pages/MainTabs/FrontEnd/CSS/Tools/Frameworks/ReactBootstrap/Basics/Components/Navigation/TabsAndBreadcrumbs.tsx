import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TabsAndBreadcrumbs = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Navigation/TabsAndBreadcrumbs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tabs & Breadcrumbs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TabsAndBreadcrumbs;
