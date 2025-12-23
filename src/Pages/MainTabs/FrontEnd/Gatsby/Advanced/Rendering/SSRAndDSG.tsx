import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSRAndDSG = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Rendering/SSRAndDSG';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SSR & DSG" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSRAndDSG;
