import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Helmet = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/Helmet';

  return (
    <>
      <PageLayout>
        <PageTitle title="Helmet" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Helmet;
