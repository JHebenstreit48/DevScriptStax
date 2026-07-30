import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
