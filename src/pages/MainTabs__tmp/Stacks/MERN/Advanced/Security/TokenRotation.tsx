import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TokenRotation = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/Security/TokenRotation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Token Rotation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TokenRotation;
