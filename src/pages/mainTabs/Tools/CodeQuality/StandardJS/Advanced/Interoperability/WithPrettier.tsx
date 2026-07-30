import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WithPrettier = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Interoperability/WithPrettier';

  return (
    <>
      <PageLayout>
        <PageTitle title="With Prettier" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WithPrettier;
