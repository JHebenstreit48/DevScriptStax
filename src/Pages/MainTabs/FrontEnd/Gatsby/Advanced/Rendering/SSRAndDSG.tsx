import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SSRAndDSG = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Advanced/Rendering/SSRAndDSG';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSR & DSG" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSRAndDSG;
