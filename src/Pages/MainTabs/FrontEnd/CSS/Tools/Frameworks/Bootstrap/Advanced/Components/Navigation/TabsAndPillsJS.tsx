import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TabsAndPillsJS = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Navigation/TabsAndPillsJS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tabs & Pills JS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TabsAndPillsJS;
