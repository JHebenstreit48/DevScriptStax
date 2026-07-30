import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RESTInFlask = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/APIPatterns/RESTInFlask';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST in Flask" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTInFlask;
