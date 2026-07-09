import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RESTInExpress = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns/RESTInExpress';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST in Express" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTInExpress;
