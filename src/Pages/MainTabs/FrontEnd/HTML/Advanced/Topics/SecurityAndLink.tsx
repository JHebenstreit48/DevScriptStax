import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecurityAndLink = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/SecurityAndLink';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced HTML Topics - Security & Link" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityAndLink;