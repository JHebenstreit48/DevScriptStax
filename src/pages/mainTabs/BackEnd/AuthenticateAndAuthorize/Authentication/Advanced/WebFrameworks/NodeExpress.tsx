import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NodeExpress = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks/NodeExpress';

  return (
    <>
      <PageLayout>
        <PageTitle title="Node / Express" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodeExpress;
