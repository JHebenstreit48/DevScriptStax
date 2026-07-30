import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TabsAndPillsJS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/TabsAndPillsJs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tabs & Pills JS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TabsAndPillsJS;